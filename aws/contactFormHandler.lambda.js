const AWS = require("aws-sdk");

const ses = new AWS.SES();

exports.handler = async (event) => {
    const { name, email, message } = JSON.parse(event.body);

    if (name && email && message) {
        const params = {
            Destination: {
                ToAddresses: ["<destination-email>"],
            },
            Message: {
                Subject: {
                    Data: `${name} Contacted You!`,
                },
                Body: {
                    Text: {
                        Data: `from: ${email} \n\n ${message}`,
                    },
                },
            },
            Source: "<source-email>",
        };

        try {
            await ses.sendEmail(params).promise();

            return {
                statusCode: 200,
                body: JSON.stringify("Submitted!"),
            };
        } catch (err) {

            return {
                statusCode: 500,
                body: JSON.stringify("500 Internal Server Error"),
            };
        }
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify("400 Bad Request"),
        };
    }
};
