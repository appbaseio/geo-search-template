/** @jsxRuntime classic */
/** @jsx jsx */
import { List, Button, Icon } from 'antd';
import { css, jsx } from '@emotion/core';
import { func, array } from 'prop-types';
import get from 'lodash.get';
import createDOMPurify from 'dompurify';
import { mediaMax } from '../../utils/media';

const DOMPurify = createDOMPurify(window);

export const NoDataStyles = css`
    .ant-list-empty-text {
        display: none;
    }
`;

export const listStyles = ({ titleColor, primaryColor }) => css`
    position: relative;
    overflow: hidden;
    padding: 5px 20px;
    width: 100%;
    height: auto;
    .list-image-container {
        width: 150px;
        height: 150px;
        ${mediaMax.medium} {
            width: 100px;
            height: 100px;
        }
    }

    .product-image {
        object-fit: cover;
    }

    .product-button {
        top: -50%;
        position: absolute;
        background: ${primaryColor} !important;
        border: 0;
        box-shadow: 0 2px 4px ${titleColor}33;
        left: 50%;
        transform: translateX(-50%);
        transition: all ease 0.2s;
    }

    ::before {
        content: '';
        width: 100%;
        height: 0vh;
        background: ${primaryColor}00 !important;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        transition: all ease 0.4s;
    }
    &:hover {
        .product-button {
            top: 45%;
        }
        ::before {
            width: 100%;
            height: 100%;
            background: ${primaryColor}1a !important;
        }
    }
`;

const highlightStyle = ({
    primaryColor,
    titleColor,
}: {
    titleColor: string,
    primaryColor: string,
}) => css`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    mark{
        font-weight: 700;
        padding: 0;
        background: ${primaryColor}33;
        color: ${titleColor}
        fontSize: 1rem;
    }
`;
export default function ListLayout({
    data,
    triggerClickAnalytics,
    isPreview,
    renderPagination,
    resultSettings,
    searchSettings,
    theme,
    currency,
}) {
    const redirectUrlText = get(
        searchSettings,
        'redirectUrlText',
        'View Product',
    );

    const userDefinedFields = get(
        resultSettings,
        'fields.userDefinedFields',
        {},
    );
    const redirectUrlIcon = get(searchSettings, 'redirectUrlIcon', '');

    return (
        <div style={{ padding: '20px 0px' }}>
            <List
                css={NoDataStyles}
                itemLayout="vertical"
                size="large"
                dataSource={data}
                renderItem={(item) => {
                    const handle = isPreview
                        ? ''
                        : get(
                              item,
                              get(resultSettings, 'fields.handle.dataField'),
                          );

                    const image = get(
                        item,
                        get(resultSettings, 'fields.image.dataField'),
                    );
                    const title = get(
                        item,
                        get(resultSettings, 'fields.title.dataField'),
                    );

                    const description = get(
                        item,
                        get(resultSettings, 'fields.description.dataField'),
                    );
                    const price = get(
                        item,
                        get(resultSettings, 'fields.price.dataField'),
                    );
                    const priceUnit = get(
                        resultSettings,
                        'fields.priceUnit.dataField',
                    );
                    const cssSelector = get(
                        resultSettings,
                        'fields.cssSelector',
                    );
                    const { variants } = item;

                    const redirectToProduct = !isPreview || handle;
                    let url = '';
                    if (redirectToProduct && handle) {
                        if (
                            handle.includes('http://') ||
                            handle.includes('https://')
                        ) {
                            url = handle;
                        } else {
                            url = `/${handle}`;
                        }
                    } else {
                        url = undefined;
                    }

                    return (
                        <a
                            href={url}
                            target="_blank"
                            rel="noreferrer noopener"
                            key={item._id}
                            id={item._id}
                        >
                            <List.Item
                                id={item._id}
                                onClick={() =>
                                    triggerClickAnalytics(item._click_id)
                                }
                                css={listStyles({
                                    ...get(theme, 'colors'),
                                })}
                                className={cssSelector}
                            >
                                <List.Item.Meta
                                    avatar={
                                        <div className="list-image-container">
                                            {image && (
                                                <img
                                                    className="product-image"
                                                    src={image}
                                                    height="100%"
                                                    width="100%"
                                                    alt={title}
                                                    onError={(event) => {
                                                        // eslint-disable-next-line
                                                        event.target.src =
                                                            'https://www.houseoftara.com/shop/wp-content/uploads/2019/05/placeholder.jpg'; // eslint-disable-line
                                                    }}
                                                />
                                            )}
                                        </div>
                                    }
                                    title={
                                        <div>
                                            {title && (
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(
                                                            title,
                                                        ),
                                                    }}
                                                    css={highlightStyle(
                                                        get(theme, 'colors'),
                                                    )}
                                                />
                                            )}
                                        </div>
                                    }
                                    description={
                                        <div>
                                            <div style={{ height: 45 }}>
                                                {description && (
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: DOMPurify.sanitize(
                                                                description,
                                                            ),
                                                        }}
                                                        className={highlightStyle(
                                                            get(
                                                                theme,
                                                                'colors',
                                                            ),
                                                        )}
                                                        style={{
                                                            display:
                                                                '-webkit-box',
                                                            WebkitBoxOrient:
                                                                'vertical',
                                                            WebkitLineClamp: 2,
                                                            whiteSpace:
                                                                'initial',
                                                        }}
                                                    />
                                                )}
                                            </div>
                                            <div>
                                                <h3
                                                    style={{
                                                        height: 25,
                                                        fontWeight: 500,
                                                        fontSize: '1rem',
                                                        marginTop: 6,
                                                        color: get(
                                                            theme,
                                                            'colors.titleColor',
                                                        ),
                                                    }}
                                                >
                                                    {variants?.length || price
                                                        ? `${
                                                              priceUnit ||
                                                              currency
                                                          } ${
                                                              variants
                                                                  ? get(
                                                                        variants[0],
                                                                        'price',
                                                                        '',
                                                                    )
                                                                  : price
                                                          }`
                                                        : null}
                                                </h3>
                                            </div>
                                        </div>
                                    }
                                />
                                {redirectToProduct ? (
                                    <Button
                                        type="primary"
                                        size="large"
                                        className="product-button"
                                    >
                                        {redirectUrlIcon ? (
                                            <img
                                                src={redirectUrlIcon}
                                                alt="redirect-url-icon"
                                                height="15px"
                                                width="15px"
                                                style={{
                                                    marginRight: 5,
                                                }}
                                            />
                                        ) : (
                                            <Icon type="eye" />
                                        )}
                                        {redirectUrlText}
                                    </Button>
                                ) : null}
                                {Object.keys(userDefinedFields).map((field) => {
                                    const { dataField } = userDefinedFields[
                                        field
                                    ];
                                    return (
                                        <div
                                            style={{
                                                margin: '5px 0px',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {field}:
                                            </span>{' '}
                                            {
                                                item[
                                                    dataField.split(
                                                        '.keyword',
                                                    )[0]
                                                ]
                                            }
                                        </div>
                                    );
                                })}
                            </List.Item>
                        </a>
                    );
                }}
            />
            {renderPagination()}
        </div>
    );
}

ListLayout.propTypes = {
    data: array,
    triggerClickAnalytics: func,
};
