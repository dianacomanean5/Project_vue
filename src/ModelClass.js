import {Model} from 'vue-mc'
import {
    boolean,
    equal,
    integer,
    min,
    required,
    string,
    alpha
} from 'vue-mc/validation';

export default class ModelClass extends Model {

    defaults() {
        return {
            id: 1,
            name: 'Maria',
            age: '18',
            skills: [ "Javascript", "CSS3", "VueJS"],
            email: 'maria@yahoo.com',
            status: true
        }
    }

    // Attribute mutations.
    mutations() {
        return {
            id: (id) => Number(id) || null,
            name: String,
            age: Number,
            skills: String,
            email: String,
            status: Boolean

        }
    }

    // Attribute validation
    validation() {
        return {
            id: integer.and(min(1)).or(equal(null)),
            name: string.and(length(2, 8)).and(alpha).or(equal(null)),
            age: integer.and(required),
            skills: string.and(required),
            email: string.and(required),
            status: boolean.and(required)
        }
    }

    options() {
        return {
            // Whether this model should validate an attribute that has changed.
            // This would only affect the errors of the changed attribute and
            // will only be applied if the value is not a blank string.
            validateOnChange: false,

            // Whether this model should be validated before it is saved, which
            // will cause the request to fail if validation does not pass. This
            // is useful when you only want to validate on demand.
            validateOnSave: true,

            // Whether this model should validate models and collections within
            // its attribute tree. The result is implicit recursion as each of
            // those instances will also validate their trees, etc.
            validateRecursively: true,
        }
    }
}