type greet_data = { name: string, timeperiod: string };
const greet_gio: greet_data = { name: 'Gio', timeperiod: 'week' };
function greet(gdata: greet_data): void {
  console.log(`Hello, ${gdata.name}!  Have a nice ${gdata.timeperiod}`);
}
greet(greet_gio);