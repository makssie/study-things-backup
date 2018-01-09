const regex = /[a-z]*\.([a-z]+)\('(.*)',\s([a-zA-Z]+)\);/g;
const str = `router.post('/channel-access', uploadChannelAccess);
router.get('/channel-access', getChannelAccessAndIncidents);`;
const subst = '$1 $2 $3';

// The substituted value will be contained in the result variable

const replacer = (provider) => (match, p1, p2, p3) => {
  return `Nome do Recurso : ${p3}
Endpoint: ${p2}
Rota Zup: ${p2}
Verbo: ${p1.toUpperCase()}
`;
};

const result = str.replace(regex, replacer('Teste'));