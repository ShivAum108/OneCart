
function Title({text1, text2}) {
  return (
    <div className="mb-3 text-center text-[35px] md:text-[40px] inline-flex items-center gap-2">
      <p className="text-blue-100">{text1} <span className="text-[#a5faf7]">{text2}</span></p>
    </div>
  )
}

export default Title