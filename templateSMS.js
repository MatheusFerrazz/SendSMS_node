var TeleSignSDK = require('telesignsdk'); //Cria uma variável chamando o SDK

const customerId = "D096EB30-B5FE-47D4-XXX-XXXXXXXXXXXX"; // ID do Cliente
const apiKey = "*********************************"; // Chave do Cliente
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10 * 1000; // 10 secs

const client = new TeleSignSDK(customerId,
    apiKey,
    rest_endpoint,
    timeout // optional
    // userAgent
);

const phoneNumber = "55XXXXXXXXXXX"; //Número que deseja enviar o SMS
const message = "You're scheduled for a dentist appointment at 2:30PM.";
const messageType = "ARN";

console.log("## MessagingClient.message ##");

function messageCallback(error, responseBody) {
    if (error === null) {
        console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
            ` => code: ${responseBody['status']['code']}` +
            `, description: ${responseBody['status']['description']}`);
    } else {
        console.error("Unable to send message. " + error);
    }
}
client.sms.message(messageCallback, phoneNumber, message, messageType); // Aqui é passado o número de telefone
  // a mensagem e o tipo da mensagem