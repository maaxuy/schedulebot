module.exports = {

	// Your bot name. Typically, this is your bot's username without the discriminator.
	// i.e: if your bot's username is MemeBot#0420, then this option would be MemeBot.
	name: "PUG Bot",

	// The bot's command prefix. The bot will recognize as command any message that begins with it.
	// i.e: "-schedulebot foo" will trigger the command "foo",
	//      whereas "ScheduleBot foo" will do nothing at all.
	//
	// If you replace YOUR_BOT_USER_ID with your bot's user ID, the prefix will be a mention to
	// your bot. You can get that ID in https://discordapp.com/developers/applications/me/
	// (click on your application, and find it under "App Details" > "Client ID"
	prefix:  "!pug",

	// This is a readable version of the prefix. Generally, this is the same as prefix, but if
	// you set prefix to be in the form of "<@YOUR_BOT_USER_ID>", you'd need to set readable_prefix
	// to be "@ScheduleBot" (or however your bot user is named).
	//
	// This is because when you use the characters `` in Discord (to highlight a command, in
	// ScheduleBot's case), the string "<@YOUR_BOT_USER_ID>" doesn't get parsed as a mention.
	// So in order not to mislead the user, we have a separate option for a readable version of
	// our prefix.
	readable_prefix: "!pug",

	// Admin app settings
	admin_app: {
		desc: "ScheduleBot admin commands",
		prefix: "schedulebot-admin"
	},

	// The master channel
	// The bot will announce the events to this channel. It won't listen to other channels.
	master_channel: "265699201277493248",

	// Events are considered "happening" for a margin of time, where users can see that the event
	// is happening right now. During that time, the event is not considered expired yet.+
	// This config determines for how long.
	happening_margin: 60000 * 5, // In milliseconds

	// Update interval
	// Every X milliseconds, ScheduleBot will update all active summaries.
	update_interval: 60000, // In milliseconds

	// List of accepted timezones: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
	default_timezone: "America/Montevideo",

	// The time format that will be used for the create command. The bot will read a date string
	// and will attempt to interpret it as the following format. If the passed time doesn't
	// match the format, the command will result in an error.
	//
	// A list of valid format tokens can be found at:
	// http://momentjs.com/docs/#year-month-and-day-tokens
	time_format: "DD/MM/YYYY HH:mm",

	// If this option is enabled, the bot will delete the message that triggered it, and its own
	// response, after the specified amount of time has passed.
	// Enable this if you don't want your channel to be flooded with bot messages.
	// ATTENTION! In order for this to work, you need to give your bot the following permission:
	// MANAGE_MESSAGES - 	0x00002000
	// More info: https://discordapp.com/developers/docs/topics/permissions
	delete_after_reply: {
		enabled: true,
		time: 60000, // In milliseconds
	},

	// If true, it will delete any message that is not a command from the master channel.
	// Leave this on to keep your master channel tidy.
	// This also requires the "manage messages" permission
	disallow_talking: true,

	// quick-inhouse command
	// This command creates an instant lobby and adds an inhouse with the default values.
	// It is the equivalent of running "@ScheduleBot create (event_name) now" and
	// "@ScheduleBot add-inhouse (id)".
	quick_inhouse: {
		// If false, the command won't be included in the bot, and won't even show on the help.
		enabled: true,

		// The command name. If you changed this to "qh", the command would be executed as
		// @ScheduleBot qh
		command_name: "start",

		// The created event's name, which is then used as a lobby name. (So you could customize
		// this with your guild's name, for instance)
		event_name: "Kappa House Inhouse"
	},

	steam: {
		// The name that the Steam bot will take
		name: "PUG Bot",

		// The bot's profile URL. It's needed to redirect users to it.
		profile_url: "http://steamcommunity.com/profiles/76561198355876402"
	},

	dota: {
		// The default inhouse server, which will be used if the user doesn't pass the
		// --server flag to the add-inhouse command.
		// Go to that command's file (Or type -schedulebot add-ihouse --help)
		// to see possible values.
		defaultServer: "brazil",

		// If enabled is true, the bot will ticket any lobbies using the provided league id.
		// Make sure that the steam bot is an admin of that league.
		ticketing: {
			enabled: false,
			league_id: 12345
		}
	}
};

// "Add to server" link:
// https://discordapp.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=0x00002000