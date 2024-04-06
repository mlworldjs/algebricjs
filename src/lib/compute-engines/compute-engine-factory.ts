import { ComputeEngine } from './base-compute-engine';
import { NativeComputeEngine } from './native-compute.engine';

const nativeComputeEngine = new NativeComputeEngine();

export var cAdd = nativeComputeEngine.add;
export var cSub = nativeComputeEngine.sub;
export var cMul = nativeComputeEngine.mul;
export var cDiv = nativeComputeEngine.div;
