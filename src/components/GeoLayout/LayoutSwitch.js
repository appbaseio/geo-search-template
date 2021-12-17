/** @jsxRuntime classic */
/** @jsx jsx */
import { Icon } from 'antd';
import { css, jsx } from '@emotion/core';
import { func } from "prop-types";

const viewSwitcherStyles = css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 30px;
    .icon-styles {
        padding: 5px;
        &: hover {
            cursor: pointer;
            color: #40a9ff;
        }
    }
`;
export default function LayoutSwitch({ switchViewLayout, resultsLayout }) {

    return (
        <div css={viewSwitcherStyles}>
            <Icon
                type="global"
                className="icon-styles"
                style={{
                    color: resultsLayout === 'map' ? '#1990ff' : 'none'
                }}
                onClick={() => switchViewLayout('map')}
            />
            <Icon
                type="menu"
                className="icon-styles"
                style={{
                    color: resultsLayout === 'list' ? '#1990ff' : 'none'
                }}
                onClick={() => switchViewLayout('list')}
            />
        </div>
    )
}

LayoutSwitch.propTypes = {
    switchViewLayout: func,
}
