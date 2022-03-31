import { request } from "../../../Services/CallAPI";
export const NEXT_NUMBER = async () => {
	let config = {
		method: "post",
		url: `/OtherInvoiceNumber/ResetProductsQuantities`,
	};
	return await request(config);
};
export const GET_ITEM_INFO = async (storeId, itemId, idType = "ItemID") => {

    let config = {
        method: "post",
        url: `/ItemInfo/${storeId}`,
        data: {
            [idType]: itemId,
        },
    };

    return await request(config);
};
export const GET_OTHER_INVOICE = async (e) => {
	let config = {
		method: "post",
		url: `/GetOtherInvoices/ResetProductsQuantities`,   
		data:e
	};
    //,Invoice,InvoiceItem,StoreID
	return await request(config);
};
export const GET_OTHER_INVOICE_ID = async (InvoiceID,e) => {
	let config = {
		method: "post",
		url: `/GetOtherInvoice/ResetProductsQuantities/${InvoiceID}`,   

	};
    //,Invoice,InvoiceItem,StoreID
	return await request(config);
};
export const GET_OTHER_INVOICE_ITEM = async (InvoiceID,e) => {
	let config = {
		method: "post",
		url: `/OtherInvoiceItems/ResetProductsQuantities/${InvoiceID}`,   

	};
    //,Invoice,InvoiceItem,StoreID
	return await request(config);
};
export const INVOICE_TRANSACTION = async (ob) => {
	let config = {
		method: "post",
		url: `/OtherInvoiceTransactions`,   
        data:{Data:[ob]}
	};
    //,Invoice,InvoiceItem,StoreID
	return await request(config);
};

export const DELETE_INVOICE = async (InvoiceID) => {
	let config = {
		method: "post",
		url: `/DeleteOtherInvoice/ResetProductsQuantities/${InvoiceID}`,
	};
	return await request(config);
};
export const DELETE_INVOICE_ITEM = async (InvoiceID,InvoiceItemID) => {
	let config = {
		method: "post",
		url: `/DeleteOtherInvoiceItem/ResetProductsQuantities/${InvoiceID}/${InvoiceItemID}`,
	};
	return await request(config);
};