const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

app.use(express.static('public'));

app.post('/send', async (req, res) => {
  try {
    await axios.get(
      'https://api.telegram.org/bot1303551272:AAG4L66GYjsat_WwJluX-pdkafqrIamdddg/sendMessage?chat_id=@qqqqwwweeeerrr2&text=' +
        req.body.text
    );

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('running on port', PORT));
