import React, { useState, useEffect } from 'react';
import { Formik, FastField, useFormikContext, useField  } from 'formik';

import * as Yup from 'yup';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const initialValues = {
    id: '7bb7123d-b194-5c9a-b9ec-9fa0cf5b0e19',
    name: 'tenant name',
    alias: 'tenant_name',
    email: 'tests@email.com',
    description: 'tenant description',
    status: 0,
    managerName: 'Thor',
    managerPhone: '(941) 813-5896',
    retailerPhone: '(918) 774-4247',
    notes: 'Some notes about tenant',
    parent: {
        name: 'Parent Name',
        id: '7bb7123d-b194-5c9a-b9ec-9fa0cf5b0e22',
    },
    children: ['123', '345', '678'].toString(),
    logo: 'https://mocked.cloudfront.net/tenants/logos/123.png',
    address: 'address',
    config: {
        contracting: {
            sourcePartnerDealerId: '123456789',
        },
        amp: {
            ex1DealerId: '1234',
        },
        delivery: {
            subscription: {
                id: 'b94761e3-8471-4993-849b-a472d882580d',
                name: 'Delivery only',
            },
            clutch: {
                hostname: 'delivery_hostname',
                endpointAsc: '123',
            },
            clutchSubscription: true,
            readyLogisticsSubscription: true,
            schedulingHours: [5, 10].toString(),
            timezone: 'America/New_York',
            windowDurationInMin: 150,
            workingDays: [0, 1, 2, 3, 4, 5].toString(),
            minDaysForDelivery: 0,
            maxDaysForDelivery: 5,
            numberOfDeliveryAgents: 2,
        },
        inventory: {
            vehicleStatusApiEndpoint: 'endpoint',
            vehicleStatusApiSecret: 'secret',
            homenetId: 'homenet',
        },
        zendesk: {
            hostname: 'zendesk',
            apiKey: 'hey',
            ssoToken: 'token',
            lightAgent: '123',
            agent: '123',
            teamLead: '123',
        },
        analytics: {
            dashboardUrl: 'google-analytic.com',
        },
        consumer: {
            cognitoPoolId: 'vitalik mines btc &',
            zendeskApiCredentialTag: 'likes',
            gtmCredentials: 'this',
            cognitoAppClientId: 'PR ADD72T12ONAL2YENRPTJNWQ',
            frontendUrl: 'https://url.com',
            socialMediaLogin: 1,
        },
        rateEstimation: {
            ficoScoreMin: 1640, // not default
            ficoScoreMax: 1900, // not default
            loanToValueRatioMin: 0.1, // not default
            loanToValueRatioMax: 1.1, // not default
            vehicleYearMin: 1, // not default
            vehicleYearMax: 2, // not default
            estAmountFinancedMin: 100, // not default
            estAmountFinancedMax: 200, // not default
            salaryAnnualMin: 1000, // not default
            salaryAnnualMax: 3000, // not default
            mileageMin: 100, // not default
            mileageMax: 500, // not default
            autoTradesMax: 99, // not default
            satisfactoryAccountsMin: 88, // not default
            satisfactoryAccountsMax: 77, // not default
            derogatoryAccountsMin: 66, // not default
            derogatoryAccountsMax: 55, // not default
            ageOfCreditMin: 7, // not default
            bankruptcies: 1, // boolean, not default
            cashdownMin: 250, // not default
            cashdownMax: 6000, // not default
            termMin: 48, // not default
            termMax: 60, // not default
        },
        paymentSettings: {
            creditRanges: {
                excellent: {
                    ficoScore: {
                        low: 740,
                        high: 900,
                    },
                    term: {
                        36: 1.99,
                        48: 2.49,
                        60: 3.99,
                        72: 4.79,
                    }
                },
                veryGood: {
                    ficoScore: {
                        low: 700,
                        high: 739,
                    },
                    term: {
                        36: 5.79,
                        48: 6.25,
                        60: 7.79,
                        72: 8.49,
                    }
                },
                good: {
                    ficoScore: {
                        low: 670,
                        high: 699,
                    },
                    term: {
                        36: 9.79,
                        48: 10.25,
                        60: 11.79,
                        72: 12.49,
                    }
                },
                fair: {
                    ficoScore: {
                        low: 640,
                        high: 669,
                    },
                    term: {
                        36: 13.79,
                        48: 14.25,
                        60: 15.79,
                        72: 16.49,
                    }
                }
            }
        }
    },
}

const validationValues = Yup.object().shape({
    // firstName: Yup.string().required(),
    // middleInitial: Yup.string(),
    // lastName: Yup.string().required(),
    // email: Yup.string().email().required(),
})




const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    card: {
        marginBottom: theme.spacing(3),
        backgroundColor: '#f3f3f3'
    }
}));

const ResettableFastFieldMaterial = ({ name }) => {
    const [isEditableView, setIsEditableView] = useState(false);
    const handleIsEditableClick = () => {
        console.log('handleIsEditableClick Click made');
        setIsEditableView(true);
    }
    const handleCancelClick = () => {
        console.log('handleCancelClick Click made');
        setIsEditableView(false);
    }
    return (
        <>
            {
                isEditableView
                    ? (
                        <FastField name={name}>
                            {
                                ({ field, form, meta }) => {
                                    console.log(`render ${field.name}`)
                                    // console.log({field, form, meta})
                                    return (
                                        <TextField
                                            {...field}
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id={field.name}
                                            // label={field.name}
                                            // autoComplete={field.name}
                                            // autoFocus
                                        />
                                    )
                                }
                            }
                        </FastField>

                    )
                    : (
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            disabled
                            value={123}
                            onClick={handleIsEditableClick}
                            // id={field.name}
                            // label={field.name}
                            // autoComplete={field.name}
                            // autoFocus
                        />
                    )}
            <a onClick={handleIsEditableClick}>Click to edit</a>
            <a onClick={handleCancelClick}>Cancel</a>
        </>
    )
}

const FastFieldMaterial = React.memo(({ name }) => {

    return (
        <FastField name={name}>
            {
                ({ field, form, meta }) => {
                    console.log(`render ${field.name}`)
                    // console.log({field, form, meta})
                    return (
                        <TextField
                            {...field}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id={field.name}
                            // label={field.name}
                            // autoComplete={field.name}
                            // autoFocus
                        />
                    )
                }
            }
        </FastField>
    )
});

const CustomFormWidget = (props) => {
    const classes = useStyles();
    // const {
    //     values,
    //     touched,
    //     setFieldValue,
    // } = useFormikContext();
    // const [field, meta] = useField(props);


    // console.log(values)

    // useEffect(() => {
    //     setFieldValue(props.name, `textA: ${values.name}, textB: ${values.id}`);
    // })

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Payments
                </Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">&nbsp;</TableCell>
                                <TableCell align="center">LOW</TableCell>
                                <TableCell align="center">HIGH</TableCell>
                                <TableCell align="center" colSpan={4}>TIER</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row" align="center">
                                    Excellent
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.excellent.ficoScore.low" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.excellent.ficoScore.high" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.excellent.term.36" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.excellent.term.48" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.excellent.term.60" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.excellent.term.72" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" align="center">
                                    Very Good
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.veryGood.ficoScore.low" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.veryGood.ficoScore.high" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.veryGood.term.36" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.veryGood.term.48" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.veryGood.term.60" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.veryGood.term.72" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" align="center">
                                    Good
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.good.ficoScore.low" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.good.ficoScore.high" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.good.term.36" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.good.term.48" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.good.term.60" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.good.term.72" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" align="center">
                                    Fair*
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.fair.ficoScore.low" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.fair.ficoScore.high" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.fair.term.36" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.fair.term.48" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.fair.term.60" />
                                </TableCell>
                                <TableCell align="right">
                                    <FastFieldMaterial name="config.paymentSettings.creditRanges.fair.term.72" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>

        </Card>

    )
}

const BigFrom = () => {
    const classes = useStyles();

    const submitFormHandler = (values, helpers) => {
        console.log(values, helpers);
    }

    return (
        (
            <Container component="main" maxWidth="md">
                <div>
                    <h1>Sign Up</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationValues}
                        onSubmit={submitFormHandler}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <Card variant="outlined" className={classes.card}>

                                    <CustomFormWidget />

                                    <hr/>

                                    <ResettableFastFieldMaterial name={'config.consumer.cognitoPoolId'}/>

                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Basic info
                                        </Typography>
                                        <FastFieldMaterial name="id" />
                                        <FastFieldMaterial name="name" />
                                        <FastFieldMaterial name="alias" />
                                        <FastFieldMaterial name="email" />
                                        <FastFieldMaterial name="description" />
                                        <FastFieldMaterial name="status" />
                                        <FastFieldMaterial name="managerName" />
                                        <FastFieldMaterial name="managerPhone" />
                                        <FastFieldMaterial name="retailerPhone" />
                                        <FastFieldMaterial name="notes" />
                                        <FastFieldMaterial name="parent.id" />
                                        <FastFieldMaterial name="parent.name" />
                                        <FastFieldMaterial name="children" />
                                        <FastFieldMaterial name="logo" />
                                        <FastFieldMaterial name="address" />
                                    </CardContent>
                                </Card>

                                <Card variant="outlined" className={classes.card}>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Config.Contracting
                                        </Typography>
                                        <FastFieldMaterial name="config.contracting.sourcePartnerDealerId" />
                                    </CardContent>
                                </Card>

                                <Card variant="outlined" className={classes.card}>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Config.Amp
                                        </Typography>
                                        <FastFieldMaterial name="config.amp.ex1DealerId" />
                                    </CardContent>
                                </Card>

                                <Card variant="outlined" className={classes.card}>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Config.Delivery
                                        </Typography>
                                        <FastFieldMaterial name="config.delivery.subscription.id" />
                                        <FastFieldMaterial name="config.delivery.subscription.name" />
                                        <FastFieldMaterial name="config.delivery.clutch.hostname" />
                                        <FastFieldMaterial name="config.delivery.clutchSubscription" />
                                        <FastFieldMaterial name="config.delivery.readyLogisticsSubscription" />
                                        <FastFieldMaterial name="config.delivery.schedulingHours" />
                                        <FastFieldMaterial name="config.delivery.timezone" />
                                        <FastFieldMaterial name="config.delivery.windowDurationInMin" />
                                        <FastFieldMaterial name="config.delivery.workingDays" />
                                        <FastFieldMaterial name="config.delivery.minDaysForDelivery" />
                                        <FastFieldMaterial name="config.delivery.maxDaysForDelivery" />
                                        <FastFieldMaterial name="config.delivery.numberOfDeliveryAgents" />
                                    </CardContent>
                                </Card>


                                <Card variant="outlined" className={classes.card}>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Config.Inventory
                                        </Typography>
                                        <FastFieldMaterial name="config.inventory.vehicleStatusApiEndpoint" />
                                        <FastFieldMaterial name="config.inventory.vehicleStatusApiSecret" />
                                        <FastFieldMaterial name="config.inventory.homenetId" />
                                    </CardContent>
                                </Card>

                                <Card variant="outlined" className={classes.card}>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Config.Zendesk
                                        </Typography>
                                        <FastFieldMaterial name="config.zendesk.hostname" />
                                        <FastFieldMaterial name="config.zendesk.apiKey" />
                                        <FastFieldMaterial name="config.zendesk.ssoToken" />
                                        <FastFieldMaterial name="config.zendesk.lightAgent" />
                                        <FastFieldMaterial name="config.zendesk.agent" />
                                        <FastFieldMaterial name="config.zendesk.teamLead" />
                                    </CardContent>
                                </Card>


                                <Card variant="outlined" className={classes.card}>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Config.Analytics
                                        </Typography>
                                        <FastFieldMaterial name="config.analytics.dashboardUrl" />
                                    </CardContent>
                                </Card>


                                <Card variant="outlined" className={classes.card}>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Config.Consumer
                                        </Typography>
                                        <FastFieldMaterial name="config.consumer.cognitoPoolId" />
                                        <FastFieldMaterial name="config.consumer.zendeskApiCredentialTag" />
                                        <FastFieldMaterial name="config.consumer.gtmCredentials" />
                                        <FastFieldMaterial name="config.consumer.cognitoAppClientId" />
                                        <FastFieldMaterial name="config.consumer.frontendUrl" />
                                        <FastFieldMaterial name="config.consumer.socialMediaLogin" />
                                    </CardContent>
                                </Card>

                                <Card variant="outlined" className={classes.card}>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Config.RateEstimation
                                        </Typography>
                                        <FastFieldMaterial name="config.rateEstimation.ficoScoreMin" />
                                        <FastFieldMaterial name="config.rateEstimation.ficoScoreMax" />
                                        <FastFieldMaterial name="config.rateEstimation.loanToValueRatioMin" />
                                        <FastFieldMaterial name="config.rateEstimation.loanToValueRatioMax" />
                                        <FastFieldMaterial name="config.rateEstimation.vehicleYearMin" />
                                        <FastFieldMaterial name="config.rateEstimation.vehicleYearMax" />
                                        <FastFieldMaterial name="config.rateEstimation.estAmountFinancedMin" />
                                        <FastFieldMaterial name="config.rateEstimation.estAmountFinancedMax" />
                                        <FastFieldMaterial name="config.rateEstimation.salaryAnnualMin" />
                                        <FastFieldMaterial name="config.rateEstimation.salaryAnnualMax" />
                                        <FastFieldMaterial name="config.rateEstimation.mileageMin" />
                                        <FastFieldMaterial name="config.rateEstimation.mileageMax" />
                                        <FastFieldMaterial name="config.rateEstimation.autoTradesMax" />
                                        <FastFieldMaterial name="config.rateEstimation.satisfactoryAccountsMin" />
                                        <FastFieldMaterial name="config.rateEstimation.satisfactoryAccountsMax" />
                                        <FastFieldMaterial name="config.rateEstimation.derogatoryAccountsMin" />
                                        <FastFieldMaterial name="config.rateEstimation.derogatoryAccountsMax" />
                                        <FastFieldMaterial name="config.rateEstimation.ageOfCreditMin" />
                                        <FastFieldMaterial name="config.rateEstimation.bankruptcies" />
                                        <FastFieldMaterial name="config.rateEstimation.cashdownMin" />
                                        <FastFieldMaterial name="config.rateEstimation.cashdownMax" />
                                        <FastFieldMaterial name="config.rateEstimation.termMin" />
                                        <FastFieldMaterial name="config.rateEstimation.termMax" />
                                    </CardContent>
                                </Card>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
                                </Button>
                            </form>
                        )}
                    />
                </div>
            </Container>

        )
    )
};

export default BigFrom;
