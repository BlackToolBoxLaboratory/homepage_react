import axios from 'axios';

const instance_registry = axios.create({
  baseURL : `${process.env.REGISTRY_URL}`
});

const instance_api = axios.create({
  baseURL : `${process.env.API_URL}`
});

export {
  instance_registry as npmRegistry,
  instance_api as npmAPI
};
