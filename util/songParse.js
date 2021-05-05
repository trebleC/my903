// [01:27.96]
//<p></p><br />
const exp1 = /<\/[a-zA-Z0-9]*>/g; //</p>
const exp2 = /<[a-zA-Z0-9]*(\s\/)*>/g;



class Song {
	constructor(song) {
		this.post_content = song;
		this._init();
	}

	_init() {
		const matches = this.song.replace(new RegExp(exp1, '\n')).replace(new RegExp(exp2, ''));
		this.post_content = matches || '';

	}
}

function songParse(songString) {
	let obj = new Song(songString);
	return obj.post_content;

}

module.exports = {
	song,
	songParse,
};
