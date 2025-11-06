import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class LightningModalBase extends LightningModal {
    @api modalTitle;
    @api modalMessage;
    @api buttonLabel;

    handleClose() {
        this.close('canceled');
    }

    handleConfirm() {
        this.close('confirmed');
    }
}
