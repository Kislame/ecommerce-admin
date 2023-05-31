function Avatar({ img, size, media }) {
  return (
    <div className="avatar">
      <div
        className={`rounded-full ${
          size === 'medium'
            ? 'w-16'
            : size === 'large'
            ? 'w-20'
            : size === 'small'
            ? 'w-12'
            : 'w-8'
        }`}
      >
        <img
          src={
            !img
              ? 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              : img
          }
        />
      </div>
    </div>
  );
}

export default Avatar;
