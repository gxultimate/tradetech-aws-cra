import { Dialog, DialogTitle, Divider, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { inject, observer } from 'mobx-react';
import React from 'react';
import RegistrationForm from './Form.js';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const AddCustomers = (props) => {
	const [ open, setOpen ] = React.useState(false);
	// const [ snackbaropen, setSnackBar ] = React.useState(false);
	// const [ snackbarmessage, setSnackBarMessage ] = React.useState('Account Added!');
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const addCustomer = (e) => {
		let { addAccount, account } = props.startingStore;
		let getDisId = JSON.parse(sessionStorage.getItem('userData'));
		account.setProperty('distributor_ID', getDisId.distributor_ID);
		account.setProperty('account_accessType', 'manager');
		account.setProperty('account_status', 'active');
		account.setProperty('account_storeName', getDisId.distributor_warehouseName);
		addAccount();

		// setTimeout(() => {
		// 	setSnackBar(true);
		// }, 3000);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	function Alert(props) {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	}

	return (
		<div>
			{/* <Snackbar
				anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
				
				open={snackbaropen}
				autoHideDuration={3000}
				onClose={setSnackBar(false)}
			>
				<Alert severity="success">{snackbarmessage}</Alert>
			</Snackbar> */}
			<Button
				variant="outlined"
				color="primary"
				onClick={handleClickOpen}
				style={{ marginTop: '8px', backgroundColor: '#208769', color: 'white' }}
			>
				<AddCircleOutlineOutlinedIcon /> <span style={{ marginLeft: '5px' }}> Add Manager</span>
			</Button>
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				aria-labelledby="responsive-dialog-title"
				maxWidth="md"
			>
				<DialogTitle id="responsive-dialog-title" style={{ backgroundColor: '#208769' }}>
					<Typography variant="h5" style={{ color: 'white' }}>
						Register Manager
					</Typography>
				</DialogTitle>
				<Divider />
				<DialogContent>
					<RegistrationForm />
				</DialogContent>
				<DialogActions>
					<Divider />
					<Button
						autoFocus
						onClick={() => {
							addCustomer();
						}}
						style={{ backgroundColor: '#208769', color: 'white' }}
					>
						<span style={{ paddingLeft: '8px', paddingRight: '8px' }}> Submit</span>
					</Button>

					<Button onClick={handleClose} autoFocus style={{ backgroundColor: '#F7A31C', color: 'white' }}>
						<span style={{ paddingLeft: '8px', paddingRight: '8px' }}> Close</span>
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default inject('startingStore')(observer(AddCustomers));
