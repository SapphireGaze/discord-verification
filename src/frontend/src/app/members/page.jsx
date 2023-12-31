import Link from "next/link";

const { getUserData } = require("../../../../backend/util.js");
const logger = require("../../../../backend/logger.js");

export default async function Members() {
  let users = [];

  try {
    users = await getUserData();
  } catch (err) {
    logger.logger.warn("Cannot open SQLite Database or User table not found.");
    console.log(err);
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="flex flex-wrap justify-center">
          {users.map((user, index) => (
            <Link key={index} href={`/members/${user.user_id}`}>
              <div className="p-4 m-6 outline outline-offset-2 outline-3 outline-secondary hover:outline-primary hover:outline-offset-4 hover:outline-8 hover:animate-pulse rounded-3xl">
                <div className="max-w-md p-8 sm:flex sm:space-x-6">
                  <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={user.pfp_url} alt={`Profile of ${user.username}`} className="object-cover object-center w-full h-full rounded-3xl" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div>
                      <h2 className="text-2xl font-semibold">{user.signature}</h2>
                      <span className="text-sm">{user.username} (@{user.user_id})</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                          <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z" data-darkreader-inline-fill=""></path>
                        </svg>
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <b>Member since: </b>{user.member_since}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}