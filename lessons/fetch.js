async function getPost() {
  try {
    const response = await fetch('https://api.github.com/users/kondusov');
    console.log(response);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data = await response.json();
    return userData = data;
  } catch (error) {
    console.error('Ошибка при запросе:', error);
  }
}
let userData = await getPost();
console.log(userData);
console.log(userData.login);
