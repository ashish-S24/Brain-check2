import { node } from '@tensorflow/tfjs-node';

const loadModel = async () => {
  const model = await node.loadSavedModel('Brain-check-react/Model');
  return model;
};

export default loadModel;
