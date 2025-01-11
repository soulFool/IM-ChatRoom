export function formatMessageTime(time: string | Date): string {
  // 转换输入时间为Date对象
  const messageDate = new Date(time)
  
  // 获取当前北京时间
  const now = new Date()
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const yesterdayStart = new Date(todayStart)
  yesterdayStart.setDate(yesterdayStart.getDate() - 1)

  // 格式化时分
  const formatHHMM = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false
    })
  }

  // 格式化年月日
  const formatYYMMDD = (date: Date) => {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '/')
  }

  if (messageDate >= todayStart) {
    // 今天之内
    return formatHHMM(messageDate)
  } else if (messageDate >= yesterdayStart) {
    // 昨天
    return `昨天 ${formatHHMM(messageDate)}`
  } else {
    // 更早
    return formatYYMMDD(messageDate)
  }
}
