module.exports = {
  getIntent: result => {
    if (result.metadata && result.metadata.intentName) {
      return result.metadata.intentName;
    }
  },
  sendSpeechResponse: speechResponse => {
    return {
      speech: speechResponse
    };
  }
};
