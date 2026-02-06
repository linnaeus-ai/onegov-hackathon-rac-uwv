import { DataType, DomainReference } from './object-types';
import { SourceLocation } from './location';
/**
 * Parameter definition
 */
export interface ParameterDefinition {
    type: 'ParameterDefinition';
    name: string;
    dataType: DataType | DomainReference;
    unit?: string;
    timeline?: boolean;
    location?: SourceLocation;
}
//# sourceMappingURL=parameters.d.ts.map