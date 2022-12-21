const appbasePrefs = {
    name: 'Search earthquakes + Geo Search | Cypress testing',
    description: '',
    pipeline: 'earthquakes',
    backend: 'elasticsearch',
    id: '70a517a3-4641-491e-8756-2a66757389d9',
    pageSettings: {
        currentPage: 'home',
        pages: {
            home: {
                componentSettings: {
                    search: {
                        componentType: 'SEARCHBOX',
                        customMessages: {
                            noResults:
                                'No suggestions found for <mark>[term]</mark>',
                        },
                        searchButton: {
                            icon: '',
                            text: 'Click here to search',
                        },
                        redirectUrlText: 'Open URL',
                        redirectUrlIcon: '',
                        showSearchAs: 'sticky',
                        fields: {
                            title: {
                                dataField: 'place',
                                highlight: true,
                            },
                            description: {
                                dataField: 'time',
                                highlight: true,
                            },
                            price: {
                                dataField: 'magnitude',
                                highlight: false,
                            },
                            priceUnit: 'Magnitude. ',
                            image: {
                                dataField: '',
                                highlight: false,
                            },
                            handle: {
                                dataField: '',
                                highlight: false,
                            },
                            handleViewer: 'link',
                            userDefinedFields: [],
                            cssSelector: '',
                        },
                        rsConfig: {
                            autosuggest: true,
                            enablePopularSuggestions: false,
                            enableRecentSearches: false,
                            highlight: true,
                            showVoiceSearch: true,
                            componentType: 'SEARCHBOX',
                        },
                    },
                    result: {
                        componentType: 'REACTIVELIST',
                        fields: {
                            title: {
                                dataField: 'place',
                                highlight: true,
                            },
                            description: {
                                dataField: 'time',
                                highlight: true,
                            },
                            price: {
                                dataField: 'magnitude',
                                highlight: false,
                            },
                            priceUnit: 'Magnitude. ',
                            image: {
                                dataField: '',
                                highlight: false,
                            },
                            handle: {
                                dataField: '',
                                highlight: false,
                            },
                            handleViewer: 'link',
                            userDefinedFields: [],
                            cssSelector: '',
                        },
                        customMessages: {
                            resultStats: '[count] products found in [time] ms',
                            noResults: 'No Results Found!',
                        },
                        rsConfig: {
                            pagination: false,
                            infiniteScroll: true,
                            componentType: 'REACTIVE_MAP',
                        },
                        sortOptionSelector: [],
                        resultHighlight: true,
                        layout: 'grid',
                        viewSwitcher: true,
                        mapLayout: 'map',
                        locationDataField: 'location',
                        mapComponent: 'openStreetMap',
                        defaultZoom: 5,
                        showSearchAsMove: true,
                        showMarkerClusters: false,
                        mapsAPIkey: 'AIzaSyA9JzjtHeXg_C_hh_GdTBdLxREWdj3nsOU',
                        displayFields: {},
                    },
                    Place_0: {
                        enabled: false,
                        customMessages: {
                            loading: 'Fetching Options',
                            noResults: 'No items Found',
                        },
                        rsConfig: {
                            title: 'Place',
                            dataField: 'place.keyword',
                            filterLabel: 'Place',
                            filterType: 'list',
                            queryFormat: 'or',
                            sortBy: 'count',
                            componentType: 'MULTILIST',
                            showCount: true,
                            showCheckbox: true,
                            showSearch: true,
                            showMissing: false,
                            missingLabel: null,
                            selectAllLabel: null,
                            componentId: 'Place_0',
                        },
                        componentType: 'MULTILIST',
                        facetType: 'dynamic',
                    },
                    Year_1: {
                        enabled: false,
                        customMessages: {
                            loading: 'Fetching Options',
                            noResults: 'No items Found',
                        },
                        rsConfig: {
                            title: 'Year',
                            dataField: 'time',
                            filterLabel: 'Year',
                            filterType: 'date',
                            startValue: '2000',
                            endValue: '2017',
                            startLabel: 'Start Year',
                            endLabel: 'End Year',
                            showHistogram: true,
                            calendarInterval: null,
                            componentType: 'RANGEINPUT',
                            componentId: 'Year_1',
                        },
                        componentType: 'RANGEINPUT',
                        facetType: 'dynamic',
                    },
                },
                indexSettings: {
                    index: 'earthquakes',
                    fusionSettings: {
                        app: null,
                        profile: null,
                        searchProfile: null,
                        meta: {
                            sponsoredProfile: null,
                        },
                    },
                    endpoint: {
                        url: '/earthquakes/_reactivesearch',
                        method: 'POST',
                        headers:
                            '{"Authorization":"Basic YTAzYTFjYjcxMzIxOjc1YjY2MDNkLTk0NTYtNGE1YS1hZjZiLWE0ODdiMzA5ZWI2MQ=="}',
                    },
                },
            },
        },
        fields: {
            cssSelector: '',
            description: {
                dataField: 'time',
                highlight: false,
            },
            handle: {
                dataField: '',
                highlight: false,
            },
            handleViewer: 'link',
            image: {
                dataField: '',
                highlight: false,
            },
            price: {
                dataField: 'magnitude',
                highlight: false,
            },
            priceUnit: 'Magnitude. ',
            title: {
                dataField: 'place',
                highlight: false,
            },
            userDefinedFields: [],
        },
    },
    themeSettings: {
        type: 'geo',
        customCss: '',
        rsConfig: {
            colors: {
                primaryColor: '#0B6AFF',
                primaryTextColor: '#fff',
                textColor: '#424242',
                titleColor: '#424242',
            },
            typography: {
                fontFamily: 'Open Sans',
            },
        },
        meta: {
            bodyBackgroundColor: '#fff',
            navbarBackgroundColor: '#001628',
            linkColor: '#3eb0ef',
            fontWeight: 400,
        },
    },
    globalSettings: {
        currency: 'USD',
        showSelectedFilters: true,
        meta: {
            branding: {
                logoUrl: '',
                logoWidth: 200,
                logoAlignment: 'left',
            },
            deploySettings: {
                versionId: '',
            },
        },
        endpoint: {
            url: '/_fusion/_reactivesearch',
            method: '',
            headers: '',
        },
    },
    exportSettings: {
        exportAs: 'embed',
        credentials: 'a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61',
        openAsPage: false,
        type: 'other',
    },
    chartSettings: {
        charts: [],
    },
    syncSettings: null,
    authenticationSettings: {
        enableAuth0: false,
        enableProfilePage: true,
        profileSettingsForm: {
            viewData: true,
            editData: true,
            closeAccount: true,
            editThemeSettings: true,
            editSearchPreferences: true,
        },
        clientId: 'fQ50eZkW3WlFoDEfHAPBxiOTYmzSXZC7',
    },
    appbaseSettings: {
        index: 'earthquakes',
        credentials: 'a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61',
        url: 'https://appbase-demo-ansible-abxiydt-arc.searchbase.io',
    },
};

export default JSON.stringify(appbasePrefs);
