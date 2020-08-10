import React, { Component } from 'react';
// import { PDFViewer } from '@react-pdf/renderer';
import { inject, observer } from 'mobx-react';
import axios from 'axios';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Button from '@material-ui/core/Button';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
// import ReactPDF from '@react-pdf/renderer';
// import MyDocument from './../Info'
class PDF extends Component {
	state = {
		// vendor_name:'',
		// vendor_wHouse:'',
		// vendor_address:'',
		// vendor_contactNo:'',
		// vendor_email:'',

		// cust_name:'',
		// cust_store:'',
		// cust_address:'',
		// cust_contactNo:'',
		// cust_email:'',

		// invoice:'',
		// order_date:'',
		// payment_method:'',
		// order_status:'',
		// payment_status:'',
		// amount_due:'',
		// total_payment:'',
		// date_completed:'',

		// item:[],
		// qty:[],
		// price:[],
		// total_price:[],
		// total_amount:[],

		name: 'sdgsdh',
		receiptId: 3213,
		price1: 123,
		price2: 123
	};

	render() {
		const styles = StyleSheet.create({
			page: {
				flexDirection: 'row',
				backgroundColor: '#E4E4E4'
			},
			section: {
				margin: 10,
				padding: 10,
				flexGrow: 1
			}
		});

		function App() {
			const MyDocument = () =>
				// <Document>
				//   <Page size="A4" style={styles.page}>
				//     <View style={styles.section}>
				//       <Text>Section #1</Text>
				//     </View>
				//     <View style={styles.section}>
				//       <Text>Section #2</Text>
				//     </View>
				//   </Page>
				// </Document>
				window.print();

			return (
				<div>
					{/* <PDFViewer>
    <MyDocument />
  </PDFViewer> */}

					<Button
						autoFocus
						startIcon={<PictureAsPdfIcon />}
						onClick={MyDocument}
						variant="contained"
						style={{ backgroundColor: '#208769', color: 'white', marginRight: '12px' }}
					>
						Print
					</Button>
				</div>
			);
		}

		return <App />;
	}
}

export default inject('employeeStore')(observer(PDF));
