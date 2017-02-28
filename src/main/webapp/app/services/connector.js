angular.module('EsConnector', ['elasticsearch'])

.service('es', function (esFactory) {
  return esFactory({ host: 'elasticsearch.default-staging.k8s.local' });
})

.factory('shareObject', function(){
    return {};
})
;
