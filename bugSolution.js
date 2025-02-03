function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }
  // Use strict equality to prevent type coercion issues
  if (a === b) {
    return true;
  } else {
    return false;
  }
}