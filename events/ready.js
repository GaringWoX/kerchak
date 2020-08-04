module.exports = (client) => {
  
  const actvs = [
    `with ${client.users.cache.size} users`,
    `at discord.gg/gangsebelah`,
    `at GANG SEBELAH`,
    `in ${client.channels.cache.size} channels`,
    `and Making Love`,
    `with Your Heart`
    ];
  
	console.log('Ready!');
  console.log(actvs);
  setInterval(() => {
        const index = Math.floor(Math.random() * (actvs.length));
        client.user.setActivity(`${actvs[index]}`);
    }, 7000);
  
};
