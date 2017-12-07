// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import { Element as PolymerElement } from './node_modules/@polymer/polymer/polymer-element.js';
import { FormComponentTemplate as Template } from './form-component-template.js';

export class FormComponent extends PolymerElement {

    // Apply our imported template markup below:
    static get template() {
        return Template.getTemplate();
    }

    constructor() {
        super();
    }

    // properties, observers, etc. are identical to 2.x
    static get properties() {
        return {
            // Members:
            title: {
                type: String,
                value: 'BLACK FRIDAY REWARDS PROGRAM!'
            },
            titleDescription: {
                type: String,
                value: "It's quick and easy, plus flexible use of points for shipping, product, samples, branded items, experiences, and much more!"
            },
            mobilePhoneLabel: {
                type: String,
                value: 'Mobile Phone'
            },
            mobilePhoneFormat: {
                type: String,
                value: 'xxx-xxx-xxxxx'
            },
            mobilePhone: String,
            smsOptIn: {
                type: Boolean,
                value: false
            },
            smsOptInLabel: {
                type: String,
                value: 'Yes, contact me through SMS Text messages when needed'
            },
            birthDay: Date,
            birthDayLabel: {
                type: String,
                value: 'Birthday'
            },
            birthDayFormat: {
                type: String,
                value: 'MM/DD/YY'
            },
            birthDayDescription: {
                type: String,
                value: '* This is so we can send a gift on your birthday'
            },
            preferredLanguagesLabel: {
                type: String,
                value: 'Preferred Language'
            },
            preferredLanguages: {
                type: Array,
                value: ['English', 'Spanish', 'Chinese', 'French']
            },
            preferredLanguage: {
                type: String,
                value: "",
                observer: 'setPreferredLanguage'
            },
            termsCheckedLabel: {
                type: String,
                value: "I accept the <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy</a>"
            },
            termsChecked: {
                type: Boolean,
                value: false
            },
            submitLabel: {
                type: String,
                value: 'JOIN NOW'
            },
            cancelLabel: {
                type: String,
                value: 'CANCEL'
            }
        }
    }

    // Observers and other functions:

    /**
     * Observer to listen for any changes on the preferredLanguage
     * @param preferredLanguage update
     */
    setPreferredLanguage(preferredLanguage) {
        if (preferredLanguage) {
            this.set('preferredLanguage', preferredLanguage);
        }
    }
}

customElements.define('form-component', FormComponent);
