import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  email() {
    return faker.internet.email();
  },
  contact_id() {
    return faker.random.number();
  },
  name() {
    return faker.name.firstName();
  },

  mobile() {
    return faker.phone.phoneNumberFormat();
  },

  phone() {
    return faker.phone.phoneNumberFormat(1);
  },

  photo_url() {
    return faker.image.avatar();
  },
});
