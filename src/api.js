export const sendUser = (ttsId) => {
  return fetch(`http://sdn.naukanet.ru:8090/serviceGetRequest/${ttsId}`).then(response => response.json());
};