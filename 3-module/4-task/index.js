function showSalary(users, age) {
  let sort = users
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join("\n")
    ;

  return sort
}
