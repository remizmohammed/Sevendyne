import bcrypt from 'bcryptjs';
import schema from '../../models';

export default async (req, res) => {
  const { user } = req.body;
  const registeredUser = await schema.User.findOne({
    where: { email: user.email }
  });
  if (registeredUser !== null) {
    throw new Error('User already exists.');
  }

  const { password, email, locationId } = user;
  const securitySalt = bcrypt.genSaltSync();
  const passwordHash = bcrypt.hashSync(password, securitySalt);
  user.userName = user.email;
  user.securityStamp = securitySalt;
  user.passwordHash = passwordHash;
  // Create user
  const affectedRows = await schema.User.create(user);

  // Create all user location entities
  // const userLocations = locationId.map(u => ({
  //   locationId: u,
  //   userId: affectedRows.userId
  // }));

  // // Register user locations
  // await schema.UserLocation.bulkCreate(userLocations);
  return { user: affectedRows };
};
