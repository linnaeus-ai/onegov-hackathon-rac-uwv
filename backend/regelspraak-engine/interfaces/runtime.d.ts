import { Value } from './value';
import { FeitType } from '../ast/feittype';
import { DomainModel } from '../ast/domain-model';
import { Dimension } from '../ast/dimensions';
import { DimensionRegistry } from '../model/dimensions';
export interface Relationship {
    feittypeNaam: string;
    subject: Value;
    object: Value;
    preposition?: string;
}
/**
 * Runtime context for execution
 */
export interface RuntimeContext {
    domainModel: DomainModel;
    getVariable(name: string): Value | undefined;
    setVariable(name: string, value: Value): void;
    pushScope(): void;
    popScope(): void;
    getParameter(name: string): Value | undefined;
    getObject(type: string, id: string): any | undefined;
    createObject(type: string, id: string, attributes: Record<string, Value>): void;
    evaluation_date: Date;
    current_instance?: Value;
    registerFeittype?(feittype: FeitType): void;
    getFeittype?(naam: string): FeitType | undefined;
    getAllFeittypen?(): FeitType[];
    findFeittypeByRole?(roleName: string): FeitType | undefined;
    addRelationship?(feittypeNaam: string, subject: Value, object: Value, preposition?: string): Relationship;
    getRelationships?(feittypeNaam: string, subject: Value): Relationship[];
    findRelationships?(criteria: {
        subject?: Value;
        object?: Value;
        feittypeNaam?: string;
    }): Relationship[];
    dimensionRegistry: DimensionRegistry;
    getDimension?(name: string): Dimension | undefined;
    clone?(): RuntimeContext;
    getKenmerk(type: string, id: string, kenmerkName: string): boolean | undefined;
    setKenmerk(type: string, id: string, kenmerkName: string, value: boolean): void;
}
//# sourceMappingURL=runtime.d.ts.map