export const requestCustomerData = (ttsId) => {
  //console.log(`request CUSTOMER data for TTS ID ${ttsId}`);
  return fetch(`http://sdn.naukanet.ru:8090/getCustomerData/${ttsId}`).then(response => response.json());
};

export const requestServicesData = (ttsId) => {
  //console.log(`request SERVICES data for TTS ID ${ttsId}`);
  return fetch(`http://sdn.naukanet.ru:8090/serviceGetRequest/${ttsId}`).then(response => response.json());
};

export const requestAccountData = (ttsId) => {
  //console.log(`request ACCOUNT data for TTS ID ${ttsId}`);
  return fetch(`http://sdn.naukanet.ru:8090/paymentGetRequest/${ttsId}`).then(response => response.json());
};

export const requestSessionsData = (ttsId) => {
  //console.log(`request SESSIONS data for TTS ID ${ttsId}`);
  return fetch(`http://sdn.naukanet.ru:8090/sessionGetRequest/${ttsId}`).then(response => response.json());
};
