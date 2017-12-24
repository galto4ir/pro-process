import FirebaseSerializer from 'emberfire/serializers/firebase';
export default FirebaseSerializer.extend({
  attrs: {
    board: { embedded: 'always' },      
    tasks: { embedded: 'always' }
  }
});