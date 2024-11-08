<!-- [![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17026053&assignment_repo_type=AssignmentRepo) -->

//answer no:3

# Type Guards in TypeScript

TypeScript brings static typing to JavaScript, allowing developers to catch errors early by explicitly defining types for variables, function parameters, and return values. However, because JavaScript is inherently dynamic, we sometimes work with values that can have multiple types. This is where **Type Guards** become invaluable.

## Why are Type Guards Necessary?

In TypeScript, **Type Guards** help us ensure that we’re working with the type we expect at runtime. They allow the compiler to narrow down the type of a variable within a particular scope, ensuring that we avoid runtime errors caused by unexpected types. For instance, suppose a variable can be a `string` or `number`. Without type guards, trying to use string methods on a `number` or performing arithmetic on a `string` could cause issues.

### Benefits of Type Guards

1. **Improved Safety**: Type Guards reduce runtime errors by catching issues at compile time.
2. **Code Readability**: By checking types explicitly, Type Guards make it clear to other developers what types you expect.
3. **Enhanced IntelliSense**: Type Guards give the TypeScript compiler more information, enabling better code suggestions and autocompletion.

---

## Types of Type Guards and Their Use Cases

There are many types of type guards in TypeScript, each is useful for different purposes. Let’s explore each type.

### 1. `typeof` Type Guards

The `typeof` operator checks the type of a variable at runtime. It’s useful for primitive types such as `string`, `number`, `boolean`, and `symbol`.

**Example:**

```typescript
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String length:", value.length); 
  } else {
    console.log("Number value:", value * 2); 
  }
}


