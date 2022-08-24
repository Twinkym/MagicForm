function search(objects) {
    return objects.findIndex(e => e.name === "John" && e.age === 30);
}