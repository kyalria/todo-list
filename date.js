


module.exports=getdate;

function getdate()
{
  let options={weekday:"long",day:"numeric",month:"long"};
  let today = new Date();
  let day=today.toLocaleDateString("en-US",options);
  return day;
}
