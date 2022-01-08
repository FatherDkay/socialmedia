const { Schema, model } = require('mongoose');

//function to validate email
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: 'Email is required',
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
        }
      ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false
      }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends?this.friends.length:0;
});

UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts?this.thoughts.length:0;
});

const User = model('User', UserSchema);

module.exports = User;