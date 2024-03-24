function Panel() {
    const panelStyle = {
        background: 'linear-gradient(180deg, #232323 0%, #026451 100%)',
        width: '580px',
        // height: '1024px',
        flexShrink: 0,
      };
      const boxStyle={
        gap:'100px'
      }
      const imgStyle={
        width: '438.667px',
        height: '90.711px'
      }
  return (
    <div style={panelStyle} className="flex-shrink-0 h-screen ">
      <div className="m-20">
        <div>
          <img style={imgStyle} src="./assets/logo.png" />
          <div className="pt-[7rem]">
            <h1 className="text-white font-semibold text-4xl pl-2 ">
              Prompt handling and management Dashboard
            </h1>
            <p className="text-white pl-2 pt-4">
              Admins can assign quality leads, members can submit prompt for
              reviews and leads will check the prompts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Panel;
