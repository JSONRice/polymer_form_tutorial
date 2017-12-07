export class FormComponentTemplate {
    static getTemplate() {
        // Sadly there's not a straightforward way to import an HTML template.
        // One tip is to modify the markup, then apply your favorite editor and surround
        // it all in double quotes, then concatenate as a JS string.
        return "<link rel=\"stylesheet\" type=\"text/css\" href=\"./node_modules/flexboxgrid/dist/flexboxgrid.min.css\">" +
            "<style>" +
            "    #main {" +
            "        display: flex;" +
            "        justify-content: center;" +
            "    }" +
            "" +
            "    .flex-container {" +
            "        display: flex;" +
            "        flex-direction: column;" +
            "        flex-wrap: wrap;" +
            "        align-items: center;" +
            "        width: 50%;" +
            "        padding: 1em;" +
            "        font-family: Arial,Helvetica,sans-serif;" +
            "        font-weight: normal;" +
            "    }" +
            "" +
            "    .flex-row {" +
            "        box-sizing: border-box;" +
            "        border: none;" +
            "        margin-bottom: 10px;" +
            "        margin-top: 10px;" +
            "        width: 80%;" +
            "    }" +
            "" +
            "    .flex-row h3 {" +
            "        display: block;" +
            "        font-family: \"Arial\", sans-serif;" +
            "        font-weight: bold;" +
            "    }" +
            "" +
            "    .label {" +
            "        font-weight: bold;" +
            "    }" +
            "" +
            "    p.caption {" +
            "        font-size: 0.75em;" +
            "    }" +
            "" +
            "    .flex-row input[type=\"text\"], select {" +
            "        width: 30%;" +
            "        padding: 5px;" +
            "    }" +
            "" +
            "" +
            "    /* ===== Begin responsive design ======== */" +
            "" +
            "    @media (max-width: 500px) {" +
            "        .flex-container {" +
            "            font-size: 1em;" +
            "            width: 85%;" +
            "        }" +
            "        .flex-row {" +
            "            width: 95%;" +
            "        }" +
            "        .flex-row input[type=\"text\"] {" +
            "            width: 100%;" +
            "        }" +
            "        .flex-row h3 {" +
            "            font-size: 1em;" +
            "        }" +
            "    }" +
            "" +
            "    /* ===== End responsive design ======== */" +
            "</style>" +
            "<form id=\"main\">" +
            "    <div class=\"flex-container\">" +
            "        <div id=\"header\" class=\"flex-row\">" +
            "            <h3>[[title]]</h3>" +
            "            <p>[[titleDescription]]</p>" +
            "        </div>" +
            "        <div class=\"flex-row\">" +
            "            <label for=\"mobilePhone\">{{mobilePhoneLabel}}</label>" +
            "            <br/>" +
            "            <input type=\"tel\" id=\"mobilePhone\" name=\"mobilePhone\" placeholder=\"{{mobilePhoneFormat}}\" required>{{mobilePhone}}</input>" +
            "        </div>" +
            "        <div class=\"flex-row\">" +
            "            <input type=\"checkbox\" id=\"smsOptIn\" name=\"smsOptIn\"></input>" +
            "            <label for=\"smsOptIn\">{{smsOptInLabel}}</label>" +
            "        </div>" +
            "        <div class=\"flex-row\">" +
            "            <label for=\"birthDay\">{{birthDayLabel}}</label>" +
            "            <br/>" +
            "            <input type=\"date\" id=\"birthDay\" name=\"birthDay\" placeholder=\"{{birthDayFormat}}\" required>{{birthDay}}</input>" +
            "            <p class=\"caption\">{{birthDayDescription}}</p>" +
            "        </div>" +
            "        <div class=\"flex-row\">" +
            "            <label for=\"preferredLanguages\">{{preferredLanguagesLabel}}</label>" +
            "            <br/>" +
            "            <select value=\"{{preferredLanguage::change}}\" name=\"preferredLanguages\" id=\"preferredLanguages\">" +
            "                <template is=\"dom-repeat\" items=\"[[preferredLanguages]]\" as=\"preferredLanguage\">" +
            "                    <option value=\"[[preferredLanguage]]\">[[preferredLanguage]]</option>" +
            "                </template>" +
            "            </select>" +
            "        </div>" +
            "        <!-- Polymer doesn't seem to do as well as expression book keeping as Angular." +
            "        The following nested dom-if is a logical AND work around. -->" +
            "        <template is=\"dom-if\" if=\"[[testMode]]\">" +
            "            <template is=\"dom-if\" if=\"[[preferredLanguage]]\">" +
            "                <div class=\"flex-row\">" +
            "                    Preferred Language: [[preferredLanguage]]" +
            "                </div>" +
            "            </template>" +
            "        </template>" +
            "        <div class=\"flex-row\">" +
            "            <input type=\"checkbox\" id=\"termsChecked\" name=\"termsChecked\" required></input>" +
            "            <label for=\"termsChecked\" inner-h-t-m-l=\"[[termsCheckedLabel]]\"></label>" +
            "        </div>" +
            "        <div class=\"flex-row\">" +
            "            <input type=\"submit\" value=\"{{submitLabel}}\" onsubmit=\"javascript:alert('route undefined')\"></input>" +
            "        </div>" +
            "    </div>" +
            "</form>"
    }
}
