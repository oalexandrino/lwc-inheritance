import { LightningElement } from 'lwc';
import LightningModalBase from 'c/lightningModal';

export default class LightningBase extends LightningElement {

    async openModal(title, message, buttonLabel = 'Confirmar') {
        const result = await LightningModalBase.open({
            size: 'small',
            modalTitle: title,
            modalMessage: message,
            buttonLabel: buttonLabel
        });

        return result;
    }
}
