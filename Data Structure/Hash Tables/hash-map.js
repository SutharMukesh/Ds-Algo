let user = {
	name: "mukesh",
	magic: true,
	profession: "Developer",
};
// Insert - O(1)
user.fullname = "Mukesh Suthar";

// lookup - O(1)
user.profession;

// Delete - O(1)
delete user.name;

// search - O(1)
user["magic"];
