export const requestCustomerData = (ttsId) => {
  return fetch(`http://sdn.naukanet.ru:8090/getCustomerData/${ttsId}`).then(response => response.json());
};

export const requestServicesData = (ttsId) => {
  return fetch(`http://sdn.naukanet.ru:8090/serviceGetRequest/${ttsId}`).then(response => response.json());
};

export const requestAccountData = (ttsId) => {
  return fetch(`http://sdn.naukanet.ru:8090/paymentGetRequest/${ttsId}`).then(response => response.json());
};

export const requestSessionsData = (ttsId) => {
  return fetch(`http://sdn.naukanet.ru:8090/sessionGetRequest/${ttsId}`).then(response => response.json());
};
