import Item from "./SubItem";

function SubMenu({
  submenu,
  subMenuState,
  link,
}) {

  return (
    subMenuState && (
      <section className="pb-10">
        <section className="relative">
          <div className="h-full w-[2px] bg-[#cbd5e1] absolute top-0 left-6"></div>
          <article className="flex flex-col pt-4 pl-10 gap-y-5">
            {submenu.map((item, index) => {

              return (
                <Item
                  key={item.name}
                  link={link + item.link}
                  text={item.name}
                  isLast={submenu.length - 1 == index ? true : false}
                />
              );
            })}
          </article>
          {/* <Item text="Sales" isLast={true}/> */}
        </section>
      </section>
    )
  );
}
export default SubMenu;
