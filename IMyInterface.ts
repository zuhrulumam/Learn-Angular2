export interface IMyInterface {
    id: number;
    name: string;
    
    method(): void;
    methodWithReturn(): number;
    sum(nums: number[]): number;
}