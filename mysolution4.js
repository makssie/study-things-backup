 function getShortMessages(messages) {
    const filtro = messages.filter( (m) => {
       return m.message.length < 50
    });
    return filtro.map((item) => {
      return item.message;
     })
 }

    module.exports = getShortMessages