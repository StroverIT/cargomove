import React, { useEffect, useState } from "react";
import { IoArrowUndo } from "react-icons/io5";
import { listHeadings } from "./heading";
import DropDownWithSelection from "../../../../generic/DropDownWithSelection";
import { GoBold } from "react-icons/go";
import { FaItalic, FaUnderline } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function EditForm({ service, setSelectedService }) {
  const [tag, setTag] = useState(listHeadings.p);

  const [currentElement, setCurrentElement] = useState(null);


  const handler = (e) => {
    const value = e.currentTarget.innerHTML;
    const focusedElement = window.getSelection();
    const focusedElementText = focusedElement.focusNode;

    const element = focusedElementText.parentNode;

    const elementTag = element.tagName;

    if (elementTag != tag?.toUpperCase() || listHeadings.p) {
      changeElement(element);
    }
    setCurrentElement(currentElement);
  };
  useEffect(() => {
    if (
      currentElement?.tagName != tag ||
      (listHeadings.p.toUpperCase())
    ) {
      if (currentElement) {
        setTag(currentElement?.tagName);
      }
    }
  }, [currentElement]);

  function changeElement(el) {
    if (el.className.includes("editor")) return;
    let n = document.createElement(tag ?? listHeadings.p);
    const newElementTagToLower = tag?.toLowerCase();
    switch (newElementTagToLower) {
      case listHeadings.h1:
        n.className = "text-2xl font-semibold";
        break;
      case listHeadings.h2:
        n.className = "text-xl font-semibold";
        break;
      case listHeadings.h3:
        n.className = "text-lg font-semibold";
        break;
      default:
        n.className = "";
        break;
    }
    // let attr = el.attributes;
    // for (let i = 0, len = attr.length; i < len; ++i) {
    //   n.setAttribute(attr[i].name, attr[i].value);
    // }
    n.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(n, el);
  }
  return (
    <section className="">
      <div className="flex items-center justify-between">
        <div
          className="flex items-center text-2xl cursor-pointer text-secondary"
          onClick={() => setSelectedService(null)}
        >
          <IoArrowUndo /> <div className="py-2 ml-2 text-base">Върни назад</div>
        </div>
        <h2 className="text-xl">
          В момента редактираш:{" "}
          <span className="underline uppercase">{service.name}</span>
        </h2>
      </div>
      <section className="border border-gray-200">
        {/* Header */}
        <article className="flex items-center border-b border-gray-250 gap-x-10">
          <DropDownWithSelection
            options={Object.keys(listHeadings)}
            selection={tag}
            setSelection={setTag}
          />
          <div className="flex items-center text-lg gap-x-4">
            <div className="text-xl">
              <GoBold />
            </div>
            <div>
              <FaItalic />
            </div>
            <div>
              <FaUnderline />
            </div>
            <div>
              <FiLink />
            </div>
          </div>
        </article>
        {/* Body */}
        <article className="relative break-all">
          <div
            className="h-48 editor"
            contentEditable="true"
            suppressContentEditableWarning={true}
            spellCheck="false"
            onInput={(e) => handler(e)}
          >
            <p>
              <br />
            </p>
          </div>
        </article>
      </section>
    </section>
  );
}
