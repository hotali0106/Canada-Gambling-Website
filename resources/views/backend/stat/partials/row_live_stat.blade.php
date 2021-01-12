<tr>
    <td>{!! $stat['Name'] !!}</td>
    <td>{!! $stat['Game'] !!}</td>
    <td>{!! $stat['User'] !!}</td>
    <td>{!! $stat['System'] !!}</td>
    <td>{!! $stat['In'] !!}</td>
    <td>{!! $stat['Out'] !!}</td>
    <td>{!! $stat['Balance'] !!}</td>
    <td>{!! $stat['Bet'] !!}</td>
    <td>{!! $stat['Win'] !!}</td>
    <td>{!! $stat['Old'] !!}</td>
    <td>{!! $stat['New'] !!}</td>
    <td>{!! $stat['IN_GAME'] !!}</td>
    <td>{!! $stat['IN_JPS'] !!}</td>
    <td>{!! $stat['IN_JPG'] !!}</td>
    <td>{!! $stat['Profit'] !!}</td>
    <td>{!! date(config('app.date_time_format'), $stat['Date']) !!}</td>
</tr>