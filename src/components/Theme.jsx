import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Open Sans',
        h1: {
            fontFamily: 'Open Sans',
            fontWeight: 700,
            fontSize: 'clamp(2em, 4em, 6em )'
        },
        h2: {
            fontFamily: 'Open Sans',
            fontWeight: 700,
            fontSize: 'clamp(1.5em, 3.5em, 5.5em )'
        },
        h4: {
            fontFamily: 'Open Sans',
            fontWeight: 700,
            fontSize: 'clamp(1em, 2em, 3em )'

        }
    },
    palette: {
        primary: {
            main: "#007bff",
            contrastText: '#fff',
        },
        secondary: {
            main: "#6c757d",
        },
        error: {
            main: '#dc3545'
        },
        warning: {
            main: '#ffc107'
        },
        info: {
            main: '#17a2b8'
        },
        success: {
            main: '#28a745'
        },
        background: {
            default: '#fff',
        },
        text: {
            primary: '#222'
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                a: {
                    color: '#007bff',
                    textDecoration: 'none'
                }
            }
        },
        MuiCard: {
            root: {
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 9px 0px',
            }
        },
        MuiCardContent: {
            root: {
                padding: '40px',
                '&:last-child': {
                    paddingBottom: '40px'
                }
            }
        },
        MuiButton: {
            root: {
                borderRadius: '16px',
                fontWeight: 900,
                fontSize: '14px',
                padding: '10px 30px',
            },
            containedPrimary: {
                color: '#fff',
            },
        }
    }
});

export default theme;