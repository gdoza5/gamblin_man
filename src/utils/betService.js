// async function addBet (){
//     await fetch("/api/bets/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json"},
//       body: JSON.stringify({
//         user: props.user.email,
//         homeN: props.fixtures[parseInt(props.ofix)].homeTeam.team_name,
//         hLogo: props.fixtures[parseInt(props.ofix)].homeTeam.logo,
//         awayN: props.fixtures[parseInt(props.ofix)].awayTeam.team_name,
//         aLogo: props.fixtures[parseInt(props.ofix)].awayTeam.logo,
//         hOdd: props.odds[0].odd,
//         dOdd: props.odds[1].odd,
//         aOdd: props.odds[2].odd,
//       })
//     })
//   }

//   export default {
//       addBet
//   }