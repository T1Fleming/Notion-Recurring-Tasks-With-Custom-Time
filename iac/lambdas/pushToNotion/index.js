// @ts-nocheck 
exports.handler = async (event) => {
    console.log('Event received:', JSON.stringify(event, null, 2));

    try {
        // Your logic here
        const response = {
            statusCode: 200,
            body: JSON.stringify({ message: 'Lambda executed successfully!' }),
        };
        return response;
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};